import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3250Component } from './test-component3250.component';

describe('TestComponent3250Component', () => {
  let component: TestComponent3250Component;
  let fixture: ComponentFixture<TestComponent3250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
