import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2329Component } from './test-component2329.component';

describe('TestComponent2329Component', () => {
  let component: TestComponent2329Component;
  let fixture: ComponentFixture<TestComponent2329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2329Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
