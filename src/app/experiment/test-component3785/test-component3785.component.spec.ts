import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3785Component } from './test-component3785.component';

describe('TestComponent3785Component', () => {
  let component: TestComponent3785Component;
  let fixture: ComponentFixture<TestComponent3785Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3785Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
