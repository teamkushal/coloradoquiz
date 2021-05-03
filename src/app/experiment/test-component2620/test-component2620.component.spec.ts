import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2620Component } from './test-component2620.component';

describe('TestComponent2620Component', () => {
  let component: TestComponent2620Component;
  let fixture: ComponentFixture<TestComponent2620Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2620Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
