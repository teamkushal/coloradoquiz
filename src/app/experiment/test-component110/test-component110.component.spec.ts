import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent110Component } from './test-component110.component';

describe('TestComponent110Component', () => {
  let component: TestComponent110Component;
  let fixture: ComponentFixture<TestComponent110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
