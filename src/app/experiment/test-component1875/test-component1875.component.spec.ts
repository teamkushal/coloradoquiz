import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1875Component } from './test-component1875.component';

describe('TestComponent1875Component', () => {
  let component: TestComponent1875Component;
  let fixture: ComponentFixture<TestComponent1875Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1875Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
