import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent979Component } from './test-component979.component';

describe('TestComponent979Component', () => {
  let component: TestComponent979Component;
  let fixture: ComponentFixture<TestComponent979Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent979Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
