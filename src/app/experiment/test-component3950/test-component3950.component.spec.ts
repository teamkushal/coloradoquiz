import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3950Component } from './test-component3950.component';

describe('TestComponent3950Component', () => {
  let component: TestComponent3950Component;
  let fixture: ComponentFixture<TestComponent3950Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3950Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
