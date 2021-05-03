import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1421Component } from './test-component1421.component';

describe('TestComponent1421Component', () => {
  let component: TestComponent1421Component;
  let fixture: ComponentFixture<TestComponent1421Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1421Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
