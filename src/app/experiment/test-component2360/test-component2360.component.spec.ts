import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2360Component } from './test-component2360.component';

describe('TestComponent2360Component', () => {
  let component: TestComponent2360Component;
  let fixture: ComponentFixture<TestComponent2360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
