import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2272Component } from './test-component2272.component';

describe('TestComponent2272Component', () => {
  let component: TestComponent2272Component;
  let fixture: ComponentFixture<TestComponent2272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2272Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
