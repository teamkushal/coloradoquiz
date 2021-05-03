import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1738Component } from './test-component1738.component';

describe('TestComponent1738Component', () => {
  let component: TestComponent1738Component;
  let fixture: ComponentFixture<TestComponent1738Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1738Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
