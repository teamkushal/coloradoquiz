import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent495Component } from './test-component495.component';

describe('TestComponent495Component', () => {
  let component: TestComponent495Component;
  let fixture: ComponentFixture<TestComponent495Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent495Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
