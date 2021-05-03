import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent262Component } from './test-component262.component';

describe('TestComponent262Component', () => {
  let component: TestComponent262Component;
  let fixture: ComponentFixture<TestComponent262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent262Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
