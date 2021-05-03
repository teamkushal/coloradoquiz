import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3670Component } from './test-component3670.component';

describe('TestComponent3670Component', () => {
  let component: TestComponent3670Component;
  let fixture: ComponentFixture<TestComponent3670Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3670Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
