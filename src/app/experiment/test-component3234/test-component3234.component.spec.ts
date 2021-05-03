import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3234Component } from './test-component3234.component';

describe('TestComponent3234Component', () => {
  let component: TestComponent3234Component;
  let fixture: ComponentFixture<TestComponent3234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3234Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
