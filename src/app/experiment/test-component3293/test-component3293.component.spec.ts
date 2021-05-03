import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3293Component } from './test-component3293.component';

describe('TestComponent3293Component', () => {
  let component: TestComponent3293Component;
  let fixture: ComponentFixture<TestComponent3293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3293Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
