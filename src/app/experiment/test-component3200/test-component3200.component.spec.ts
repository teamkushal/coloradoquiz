import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3200Component } from './test-component3200.component';

describe('TestComponent3200Component', () => {
  let component: TestComponent3200Component;
  let fixture: ComponentFixture<TestComponent3200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
