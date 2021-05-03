import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3963Component } from './test-component3963.component';

describe('TestComponent3963Component', () => {
  let component: TestComponent3963Component;
  let fixture: ComponentFixture<TestComponent3963Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3963Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
