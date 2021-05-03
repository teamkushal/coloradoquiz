import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3641Component } from './test-component3641.component';

describe('TestComponent3641Component', () => {
  let component: TestComponent3641Component;
  let fixture: ComponentFixture<TestComponent3641Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3641Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
