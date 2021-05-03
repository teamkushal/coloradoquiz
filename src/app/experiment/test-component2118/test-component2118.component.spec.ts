import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2118Component } from './test-component2118.component';

describe('TestComponent2118Component', () => {
  let component: TestComponent2118Component;
  let fixture: ComponentFixture<TestComponent2118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2118Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
