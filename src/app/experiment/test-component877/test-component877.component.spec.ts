import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent877Component } from './test-component877.component';

describe('TestComponent877Component', () => {
  let component: TestComponent877Component;
  let fixture: ComponentFixture<TestComponent877Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent877Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
