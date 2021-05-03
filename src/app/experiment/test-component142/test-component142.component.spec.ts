import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent142Component } from './test-component142.component';

describe('TestComponent142Component', () => {
  let component: TestComponent142Component;
  let fixture: ComponentFixture<TestComponent142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
