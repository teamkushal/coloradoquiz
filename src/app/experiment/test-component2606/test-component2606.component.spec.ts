import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2606Component } from './test-component2606.component';

describe('TestComponent2606Component', () => {
  let component: TestComponent2606Component;
  let fixture: ComponentFixture<TestComponent2606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2606Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
