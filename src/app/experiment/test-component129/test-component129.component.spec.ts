import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent129Component } from './test-component129.component';

describe('TestComponent129Component', () => {
  let component: TestComponent129Component;
  let fixture: ComponentFixture<TestComponent129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
