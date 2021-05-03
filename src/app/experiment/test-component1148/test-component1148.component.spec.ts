import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1148Component } from './test-component1148.component';

describe('TestComponent1148Component', () => {
  let component: TestComponent1148Component;
  let fixture: ComponentFixture<TestComponent1148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
