import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent440Component } from './test-component440.component';

describe('TestComponent440Component', () => {
  let component: TestComponent440Component;
  let fixture: ComponentFixture<TestComponent440Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent440Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
