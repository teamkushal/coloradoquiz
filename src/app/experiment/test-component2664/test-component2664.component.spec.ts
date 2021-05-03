import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2664Component } from './test-component2664.component';

describe('TestComponent2664Component', () => {
  let component: TestComponent2664Component;
  let fixture: ComponentFixture<TestComponent2664Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2664Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
