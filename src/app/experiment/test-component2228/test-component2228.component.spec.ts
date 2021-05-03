import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2228Component } from './test-component2228.component';

describe('TestComponent2228Component', () => {
  let component: TestComponent2228Component;
  let fixture: ComponentFixture<TestComponent2228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2228Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
