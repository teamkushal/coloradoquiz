import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3876Component } from './test-component3876.component';

describe('TestComponent3876Component', () => {
  let component: TestComponent3876Component;
  let fixture: ComponentFixture<TestComponent3876Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3876Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
