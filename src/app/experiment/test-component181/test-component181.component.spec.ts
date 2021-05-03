import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent181Component } from './test-component181.component';

describe('TestComponent181Component', () => {
  let component: TestComponent181Component;
  let fixture: ComponentFixture<TestComponent181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
