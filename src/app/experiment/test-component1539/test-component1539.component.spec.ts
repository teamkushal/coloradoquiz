import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1539Component } from './test-component1539.component';

describe('TestComponent1539Component', () => {
  let component: TestComponent1539Component;
  let fixture: ComponentFixture<TestComponent1539Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1539Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
