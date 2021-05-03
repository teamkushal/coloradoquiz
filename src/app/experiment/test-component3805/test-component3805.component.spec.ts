import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3805Component } from './test-component3805.component';

describe('TestComponent3805Component', () => {
  let component: TestComponent3805Component;
  let fixture: ComponentFixture<TestComponent3805Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3805Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
