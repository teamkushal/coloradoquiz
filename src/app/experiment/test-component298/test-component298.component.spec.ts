import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent298Component } from './test-component298.component';

describe('TestComponent298Component', () => {
  let component: TestComponent298Component;
  let fixture: ComponentFixture<TestComponent298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent298Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
