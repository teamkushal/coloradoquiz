import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2404Component } from './test-component2404.component';

describe('TestComponent2404Component', () => {
  let component: TestComponent2404Component;
  let fixture: ComponentFixture<TestComponent2404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
