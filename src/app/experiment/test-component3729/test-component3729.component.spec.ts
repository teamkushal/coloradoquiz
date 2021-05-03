import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3729Component } from './test-component3729.component';

describe('TestComponent3729Component', () => {
  let component: TestComponent3729Component;
  let fixture: ComponentFixture<TestComponent3729Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3729Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
