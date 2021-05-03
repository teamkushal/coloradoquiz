import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1495Component } from './test-component1495.component';

describe('TestComponent1495Component', () => {
  let component: TestComponent1495Component;
  let fixture: ComponentFixture<TestComponent1495Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1495Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
