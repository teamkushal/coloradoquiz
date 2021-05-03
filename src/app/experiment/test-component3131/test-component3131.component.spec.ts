import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3131Component } from './test-component3131.component';

describe('TestComponent3131Component', () => {
  let component: TestComponent3131Component;
  let fixture: ComponentFixture<TestComponent3131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
