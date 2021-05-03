import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1655Component } from './test-component1655.component';

describe('TestComponent1655Component', () => {
  let component: TestComponent1655Component;
  let fixture: ComponentFixture<TestComponent1655Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1655Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
