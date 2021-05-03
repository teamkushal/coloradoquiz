import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3244Component } from './test-component3244.component';

describe('TestComponent3244Component', () => {
  let component: TestComponent3244Component;
  let fixture: ComponentFixture<TestComponent3244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
