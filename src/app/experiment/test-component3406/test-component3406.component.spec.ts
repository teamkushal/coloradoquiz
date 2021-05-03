import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3406Component } from './test-component3406.component';

describe('TestComponent3406Component', () => {
  let component: TestComponent3406Component;
  let fixture: ComponentFixture<TestComponent3406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3406Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
