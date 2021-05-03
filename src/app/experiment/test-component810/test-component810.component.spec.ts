import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent810Component } from './test-component810.component';

describe('TestComponent810Component', () => {
  let component: TestComponent810Component;
  let fixture: ComponentFixture<TestComponent810Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent810Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
