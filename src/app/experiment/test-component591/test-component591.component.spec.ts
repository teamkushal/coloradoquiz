import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent591Component } from './test-component591.component';

describe('TestComponent591Component', () => {
  let component: TestComponent591Component;
  let fixture: ComponentFixture<TestComponent591Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent591Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
