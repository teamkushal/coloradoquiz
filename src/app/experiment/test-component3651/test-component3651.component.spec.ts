import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3651Component } from './test-component3651.component';

describe('TestComponent3651Component', () => {
  let component: TestComponent3651Component;
  let fixture: ComponentFixture<TestComponent3651Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3651Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
