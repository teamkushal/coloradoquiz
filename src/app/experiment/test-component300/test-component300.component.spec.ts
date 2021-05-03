import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent300Component } from './test-component300.component';

describe('TestComponent300Component', () => {
  let component: TestComponent300Component;
  let fixture: ComponentFixture<TestComponent300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
