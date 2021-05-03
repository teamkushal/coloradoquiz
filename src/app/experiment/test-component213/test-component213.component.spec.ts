import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent213Component } from './test-component213.component';

describe('TestComponent213Component', () => {
  let component: TestComponent213Component;
  let fixture: ComponentFixture<TestComponent213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent213Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
