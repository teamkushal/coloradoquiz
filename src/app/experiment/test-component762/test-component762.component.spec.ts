import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent762Component } from './test-component762.component';

describe('TestComponent762Component', () => {
  let component: TestComponent762Component;
  let fixture: ComponentFixture<TestComponent762Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent762Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
