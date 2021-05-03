import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent254Component } from './test-component254.component';

describe('TestComponent254Component', () => {
  let component: TestComponent254Component;
  let fixture: ComponentFixture<TestComponent254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent254Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
