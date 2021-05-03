import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2792Component } from './test-component2792.component';

describe('TestComponent2792Component', () => {
  let component: TestComponent2792Component;
  let fixture: ComponentFixture<TestComponent2792Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2792Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
