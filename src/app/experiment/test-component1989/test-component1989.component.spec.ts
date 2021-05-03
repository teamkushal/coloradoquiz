import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1989Component } from './test-component1989.component';

describe('TestComponent1989Component', () => {
  let component: TestComponent1989Component;
  let fixture: ComponentFixture<TestComponent1989Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1989Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
