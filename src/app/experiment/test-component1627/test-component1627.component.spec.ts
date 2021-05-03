import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1627Component } from './test-component1627.component';

describe('TestComponent1627Component', () => {
  let component: TestComponent1627Component;
  let fixture: ComponentFixture<TestComponent1627Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1627Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
