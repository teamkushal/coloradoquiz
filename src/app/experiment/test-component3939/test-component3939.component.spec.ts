import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3939Component } from './test-component3939.component';

describe('TestComponent3939Component', () => {
  let component: TestComponent3939Component;
  let fixture: ComponentFixture<TestComponent3939Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3939Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
