import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3218Component } from './test-component3218.component';

describe('TestComponent3218Component', () => {
  let component: TestComponent3218Component;
  let fixture: ComponentFixture<TestComponent3218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3218Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
